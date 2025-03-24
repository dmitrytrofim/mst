class FixedHeader {
 constructor(header) {
  this.header = header;
 }
 fixed(event) {
  if (window.scrollY > 0) {
   this.header.classList.add('j-scroll');
  } else {
   this.header.classList.remove('j-scroll');
  }
 }
 start(event) {
  if (this.header) this.fixed(event);
 }
}

export default FixedHeader;
