function addEntry(sectionId) {
  const section = document.getElementById(sectionId);
  const firstEntry = section.querySelector('.entry');
  if (firstEntry) {
    const newEntry = firstEntry.cloneNode(true);
    newEntry.querySelectorAll('input').forEach(input => input.value = '');
    newEntry.querySelector('.remove').addEventListener('click', () => newEntry.remove());
    section.insertBefore(newEntry, section.querySelector('.add'));
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.remove').forEach(btn => {
    btn.addEventListener('click', function () {
      this.parentElement.remove();
    });
  });
});
function downloadPDF() {
  const element = document.querySelector('.editor');
  const opt = {
    margin:       0.5,
    filename:     'resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}
