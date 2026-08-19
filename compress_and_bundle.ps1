Add-Type -AssemblyName System.Drawing

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]88)

$base64Images = @{}

for ($i = 1; $i -le 5; $i++) {
    $srcPath = Join-Path $PSScriptRoot "src\$i.case.png"
    $orig = [System.Drawing.Image]::FromFile($srcPath)
    
    # 가로 900px 기준으로 비율 맞춰 축소 (선명도 최상 유지)
    $targetWidth = 900
    $targetHeight = [int]($orig.Height * ($targetWidth / $orig.Width))
    
    $bmp = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($bmp)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.DrawImage($orig, 0, 0, $targetWidth, $targetHeight)
    
    $ms = New-Object System.IO.MemoryStream
    $bmp.Save($ms, $codec, $encoderParams)
    $bytes = $ms.ToArray()
    $b64 = [Convert]::ToBase64String($bytes)
    $base64Images["case$i"] = "data:image/jpeg;base64,$b64"
    
    Write-Output "Case ${i} compressed size = $([math]::Round($bytes.Length / 1024, 1)) KB"
    
    $ms.Dispose()
    $graphics.Dispose()
    $bmp.Dispose()
    $orig.Dispose()
}

$json = $base64Images | ConvertTo-Json
[System.IO.File]::WriteAllText((Join-Path $PSScriptRoot "case_images_base64.json"), $json, [System.Text.Encoding]::UTF8)
Write-Output "Base64 JSON generated successfully."
