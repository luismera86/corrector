const element = document.body

export const otro = () => {
  html2pdf(element, {
    margin: 0,
    filename: 'test.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 1, letterRendering: true },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  })
}
