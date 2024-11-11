class Page {
  constructor() {
    this.htmlString = "";
  }
  render() {
    document.getElementById("root").innerHTML = this.htmlString;
  }
}

//redner(): 여기서 this.htmlString에 저장된 HTML 문자열을 실제 DOM에 삽입해서 웹페이지 그려주는 역할.

export default Page;
