
const element = document.getElementById('delivery-evaluation');

export const savePdf = () => {
    let doc = new jsPDF('p', 'pt', 'a4');
    let margin = 0;
    let scale = (doc.internal.pageSize.width - 1 * margin) / element.offsetWidth;
    doc.html (element, {
        x: margin,
        y: margin,
        html2canvas: {
            scale: scale
        },
        callback: function (doc) {
            doc.output('dataurlnewwindow', 'test.pdf');
        }
    });

  
}
    
