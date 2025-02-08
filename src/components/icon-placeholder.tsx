export function generatePlaceholderSVG(name: string, color: string = "#000000") {
  const svg = `
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="${color}" opacity="0.2"/>
      <text x="50" y="50" font-family="Arial" font-size="14" fill="${color}" text-anchor="middle" dominant-baseline="middle">
        ${name}
      </text>
    </svg>
  `
  const encodedSVG = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${encodedSVG}`
} 