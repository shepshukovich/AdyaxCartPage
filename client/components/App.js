import customHTML from './index.html';
import style from '../../public/style.scss';

let root = document.getElementById('root');
let ih = root.innerHTML;

root.innerHTML = customHTML + ih;


// const typeFile = document.getElementsByClassName('cv')[0];
// const uploadBtn = document.getElementsByClassName('custom-upload-btn')[0];
// const input = document.getElementsByTagName('input');
//
// typeFile.addEventListener('change', function(event) {
//   uploadBtn.innerHTML = this.files[0].name;
// });
//
// typeFile.addEventListener('mouseover', function(event) {
//   uploadBtn.style.border = '1px solid #fddc3e';
// })
//
// typeFile.addEventListener('mouseout', function(event) {
//   uploadBtn.style.border = '1px solid #dcdcdc';
// })

// const f = document.getElementsByClassName('form')[0].elements[0];
//
// f.addEventListener('change', function() {
//   console.log();
//   console.log(f.checked);
//
// });
