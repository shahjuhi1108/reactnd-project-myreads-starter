(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),s=a.n(r),c=a(5),l=a(6),i=a(8),h=a(7),u=a(9),p=a(17),f="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var b={Accept:"application/json",Authorization:d},m=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(p.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},k=function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(p.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},y=(a(28),{move:"Move to...",currentlyReading:"Currently Reading",wantToRead:"Want To Read",read:"Read",none:"None"}),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e){e.preventDefault(),a.props.handleShelfTypeChange(a.props.book,e.target.value)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[],t=[];return Array.isArray(this.props.book.authors)&&this.props.book.authors.map(function(e){return t.push(o.a.createElement("div",{key:e,className:"book-author"},e))}),Object.keys(y).forEach(function(t){"move"===t?e.push(o.a.createElement("option",{key:t,value:t,disabled:!0},y[t])):e.push(o.a.createElement("option",{key:t,value:t},y[t]))}),o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url("+(void 0===this.props.book.imageLinks?"":this.props.book.imageLinks.thumbnail)+")"}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:this.props.book.shelf?this.props.book.shelf:this.props.shelfType,onChange:this.handleChange},e))),o.a.createElement("div",{className:"book-title"},this.props.book.title),o.a.createElement("div",{className:"book-authors"},t))}}]),t}(n.Component);v.defaultProps={shelfType:"none"};var g=v,E=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},y[this.props.shelfType]),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.bookDetails.filter(function(t){return e.props.shelfType===t.shelf||e.props.ignoreShelf}).map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(g,{handleShelfTypeChange:e.props.handleShelfTypeChange,shelfType:e.props.shelfType,book:t}))}))))))}}]),t}(n.Component);E.defaultProps={ignoreShelf:!1};var j=E,S=a(10),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={searchedBooksState:[]},a.searchBarChangeHandle=function(e){e.preventDefault(),k(e.target.value).then(function(e){if(Array.isArray(e)){var t=[];e.forEach(function(e){var n=a.props.findBookInArray(e);n?t.push(n):t.push(e)}),a.setState(function(e){return{searchedBooksState:t}})}else a.setState(function(e){return{searchedBooksState:[]}})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(S.b,{className:"close-search",to:"/",refresh:"true"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:this.searchBarChangeHandle}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},o.a.createElement(j,{ignoreShelf:!0,bookDetails:this.state.searchedBooksState,handleShelfTypeChange:this.props.handleShelfTypeChange}))))}}]),t}(n.Component),O=a(14),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={bookDetails:[],shelfType:["currentlyReading","wantToRead","read"]},a.findBook=function(e){return a.state.bookDetails.find(function(t){return t.id===e.id})},a.handleAddNewBook=function(e,t){a.findBook(e)?a.handleShelfTypeChange(e,t):m(e,t).then(function(n){e.shelf=t,a.setState(function(t){return{bookDetails:t.bookDetails.concat([e])}})})},a.handleShelfTypeChange=function(e,t){m(e,t).then(function(n){var o=[];Object.assign({},a.state).bookDetails.forEach(function(a){a.id!==e.id?o.push(a):(a.shelf=t,o.push(a))}),a.setState(function(e){return{bookDetails:o}})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(f,"/books"),{headers:b}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState(function(){return{bookDetails:t}})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(O.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(N,{findBookInArray:e.findBook,handleShelfTypeChange:function(t,a){e.handleAddNewBook(t,a)}})}}),o.a.createElement(O.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),e.state.shelfType.map(function(t){return o.a.createElement(j,{key:t,shelfType:t,bookDetails:e.state.bookDetails,handleShelfTypeChange:e.handleShelfTypeChange})}),o.a.createElement(S.b,{to:"/search",className:"open-search"},"Add a Book"))}}))}}]),t}(o.a.Component);a(35);s.a.render(o.a.createElement(S.a,{basename:"/reactnd-project-myreads-starter/"},o.a.createElement(T,null)),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.3adf5bf9.chunk.js.map