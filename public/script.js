const input = document.getElementById('file-input');
const canvas = document.getElementById('pdf-render');
const ctx = canvas.getContext('2d');

input.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file || file.type !== 'application/pdf') {
    alert('Please select a PDF file.');
    return;
  }

  const fileReader = new FileReader();
  fileReader.onload = async function () {
    try {
      const typedarray = new Uint8Array(this.result);
      const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      await page.render({ canvasContext: ctx, viewport }).promise;
    } catch (err) {
      console.error(err);
      alert('Failed to render PDF.');
    }
  };
  fileReader.readAsArrayBuffer(file);
});
