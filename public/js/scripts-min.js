"use strict";function iniciarApp(){createGallery(),navFija(),scrollNav()}function navFija(){var e=document.querySelector(".header"),t=document.querySelector(".festival"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),n.classList.add("bodyScroll")):(e.classList.remove("fijo"),n.classList.remove("bodyScroll"))}))}function scrollNav(){document.querySelectorAll(".nav a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))}))}function createGallery(){for(var e=document.querySelector(".gallery__img"),t=function(t){var n=document.createElement("picture");n.innerHTML='\n        <source srcset="assets/img/thumb/'.concat(t,'" type="avif" />\n        <source srcset="assets/img/thumb/').concat(t,'" type="webp" />\n        <img\n          loading="lazy"\n          width="200"\n          height="300"\n          src="assets/img/thumb/').concat(t,'.jpg"\n          alt="imagen-galeria"\n        />'),n.onclick=function(){showImg(t)},e.appendChild(n)},n=1;n<=12;n++)t(n)}function showImg(e){var t=document.createElement("picture");t.innerHTML='\n        <source srcset="assets/img/grande/'.concat(e,'" type="avif" />\n        <source srcset="assets/img/grande/').concat(e,'" type="webp" />\n        <img\n          loading="lazy"\n          width="200"\n          height="300"\n          src="assets/img/grande/').concat(e,'.jpg"\n          alt="imagen-galeria"\n        />');var n=document.createElement("div");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){document.querySelector("body").classList.remove("fijar"),n.remove()};var c=document.createElement("p");c.textContent="X",c.classList.add("btnClose"),c.onclick=function(){n.remove(),document.querySelector("body").classList.remove("fijar")},n.appendChild(c);var a=document.querySelector("body");a.appendChild(n),a.classList.add("fijar")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMtbWluLmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbImluaWNpYXJBcHAiLCJjcmVhdGVHYWxsZXJ5IiwibmF2RmlqYSIsInNjcm9sbE5hdiIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZlc3RpdmFsIiwiYm9keSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxpbmsiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWN0aW9uU2Nyb2xsIiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsImhyZWYiLCJ2YWx1ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJnYWxsZXJ5IiwiX2xvb3AiLCJpIiwiaW1nIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNvbmNhdCIsIm9uY2xpY2siLCJzaG93SW1nIiwiYXBwZW5kQ2hpbGQiLCJpZCIsIm92ZXJsYXkiLCJjbG9zZU1vZGFsIiwidGV4dENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBLGFDSUEsU0FBQUEsYUFDQUMsZ0JBQ0FDLFVBQ0FDLFlBR0EsU0FBQUQsVUFDQSxJQUFBRSxFQUFBQyxTQUFBQyxjQUFBLFdBQ0FDLEVBQUFGLFNBQUFDLGNBQUEsYUFDQUUsRUFBQUgsU0FBQUMsY0FBQSxRQUVBRyxPQUFBQyxpQkFBQSxVQUFBLFdBQ0FILEVBQUFJLHdCQUFBQyxPQUFBLEdBQ0FSLEVBQUFTLFVBQUFDLElBQUEsUUFDQU4sRUFBQUssVUFBQUMsSUFBQSxnQkFFQVYsRUFBQVMsVUFBQUUsT0FBQSxRQUNBUCxFQUFBSyxVQUFBRSxPQUFBLGtCQUtBLFNBQUFaLFlBQ0FFLFNBQUFXLGlCQUFBLFVBRUFDLFNBQUEsU0FBQUMsR0FDQUEsRUFBQVIsaUJBQUEsU0FBQSxTQUFBUyxHQUNBQSxFQUFBQyxpQkFDQSxJQUFBQyxFQUFBRixFQUFBRyxPQUFBQyxXQUFBQyxLQUFBQyxNQUNBcEIsU0FBQUMsY0FBQWUsR0FDQUssZUFBQSxDQUFBQyxTQUFBLGlCQUtBLFNBQUExQixnQkFHQSxJQUZBLElBQUEyQixFQUFBdkIsU0FBQUMsY0FBQSxpQkFEQXVCLEVBQUEsU0FHQUMsR0FDQSxJQUFBQyxFQUFBMUIsU0FBQTJCLGNBQUEsV0FDQUQsRUFBQUUsVUFBQSw4Q0FBQUMsT0FDQUosRUFEQSwrREFBQUksT0FFQUosRUFGQSw2SUFBQUksT0FPQUosRUFQQSxxREFXQUMsRUFBQUksUUFBQSxXQUNBQyxRQUFBTixJQUdBRixFQUFBUyxZQUFBTixJQWpCQUQsRUFBQSxFQUFBQSxHQUFBLEdBQUFBLElBQUFELEVBQUFDLEdBcUJBLFNBQUFNLFFBQUFFLEdBQ0EsSUFBQVAsRUFBQTFCLFNBQUEyQixjQUFBLFdBQ0FELEVBQUFFLFVBQUEsK0NBQUFDLE9BQ0FJLEVBREEsZ0VBQUFKLE9BRUFJLEVBRkEsOElBQUFKLE9BT0FJLEVBUEEscURBV0EsSUFBQUMsRUFBQWxDLFNBQUEyQixjQUFBLE9BQ0FPLEVBQUFGLFlBQUFOLEdBQ0FRLEVBQUExQixVQUFBQyxJQUFBLFdBQ0F5QixFQUFBSixRQUFBLFdBQ0E5QixTQUFBQyxjQUFBLFFBQ0FPLFVBQUFFLE9BQUEsU0FDQXdCLEVBQUF4QixVQUlBLElBQUF5QixFQUFBbkMsU0FBQTJCLGNBQUEsS0FDQVEsRUFBQUMsWUFBQSxJQUNBRCxFQUFBM0IsVUFBQUMsSUFBQSxZQUNBMEIsRUFBQUwsUUFBQSxXQUNBSSxFQUFBeEIsU0FDQVYsU0FBQUMsY0FBQSxRQUNBTyxVQUFBRSxPQUFBLFVBRUF3QixFQUFBRixZQUFBRyxHQUdBLElBQUFoQyxFQUFBSCxTQUFBQyxjQUFBLFFBQ0FFLEVBQUE2QixZQUFBRSxHQUNBL0IsRUFBQUssVUFBQUMsSUFBQSxTQW5HQVQsU0FBQUssaUJBQUEsb0JBQUEsV0FDQVYiLCJmaWxlIjoic2NyaXB0cy1taW4uanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYERPTUNvbnRlbnRMb2FkZWRgLCAoKSA9PiB7XHJcbiAgaW5pY2lhckFwcCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluaWNpYXJBcHAoKSB7XHJcbiAgY3JlYXRlR2FsbGVyeSgpO1xyXG4gIG5hdkZpamEoKTtcclxuICBzY3JvbGxOYXYoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmF2RmlqYSgpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGVhZGVyYCk7XHJcbiAgY29uc3QgZmVzdGl2YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZmVzdGl2YWxgKTtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9keWApO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihgc2Nyb2xsYCwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGZlc3RpdmFsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8IDApIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoYGZpam9gKTtcclxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKGBib2R5U2Nyb2xsYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShgZmlqb2ApO1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoYGJvZHlTY3JvbGxgKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsTmF2KCkge1xyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLm5hdiBhYCk7XHJcblxyXG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHNlY3Rpb25TY3JvbGwgPSBlLnRhcmdldC5hdHRyaWJ1dGVzLmhyZWYudmFsdWU7XHJcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25TY3JvbGwpO1xyXG4gICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IGBzbW9vdGhgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdhbGxlcnkoKSB7XHJcbiAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYWxsZXJ5X19pbWdgKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGljdHVyZWApO1xyXG4gICAgaW1nLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c291cmNlIHNyY3NldD1cImFzc2V0cy9pbWcvdGh1bWIvJHtpfVwiIHR5cGU9XCJhdmlmXCIgLz5cclxuICAgICAgICA8c291cmNlIHNyY3NldD1cImFzc2V0cy9pbWcvdGh1bWIvJHtpfVwiIHR5cGU9XCJ3ZWJwXCIgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjIwMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxyXG4gICAgICAgICAgc3JjPVwiYXNzZXRzL2ltZy90aHVtYi8ke2l9LmpwZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJpbWFnZW4tZ2FsZXJpYVwiXHJcbiAgICAgICAgLz5gO1xyXG5cclxuICAgIGltZy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBzaG93SW1nKGkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SW1nKGlkKSB7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGljdHVyZWApO1xyXG4gIGltZy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHNvdXJjZSBzcmNzZXQ9XCJhc3NldHMvaW1nL2dyYW5kZS8ke2lkfVwiIHR5cGU9XCJhdmlmXCIgLz5cclxuICAgICAgICA8c291cmNlIHNyY3NldD1cImFzc2V0cy9pbWcvZ3JhbmRlLyR7aWR9XCIgdHlwZT1cIndlYnBcIiAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgIHdpZHRoPVwiMjAwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjMwMFwiXHJcbiAgICAgICAgICBzcmM9XCJhc3NldHMvaW1nL2dyYW5kZS8ke2lkfS5qcGdcIlxyXG4gICAgICAgICAgYWx0PVwiaW1hZ2VuLWdhbGVyaWFcIlxyXG4gICAgICAgIC8+YDtcclxuICAvL0NyZWEgZWwgb3ZlcmxheVxyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcclxuICBvdmVybGF5LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKGBvdmVybGF5YCk7XHJcbiAgb3ZlcmxheS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHlgKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShgZmlqYXJgKTtcclxuICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgfTtcclxuXHJcbiAgLy9DZXJyYXIgbW9kYWxcclxuICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGApO1xyXG4gIGNsb3NlTW9kYWwudGV4dENvbnRlbnQgPSBgWGA7XHJcbiAgY2xvc2VNb2RhbC5jbGFzc0xpc3QuYWRkKGBidG5DbG9zZWApO1xyXG4gIGNsb3NlTW9kYWwub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9keWApO1xyXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKGBmaWphcmApO1xyXG4gIH07XHJcbiAgb3ZlcmxheS5hcHBlbmRDaGlsZChjbG9zZU1vZGFsKTtcclxuXHJcbiAgLy9Bw7FhZGUgYWwgSFRNTFxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBib2R5YCk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuICBib2R5LmNsYXNzTGlzdC5hZGQoYGZpamFyYCk7XHJcbn1cclxuIl19