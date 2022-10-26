import React, { useState } from 'react';

function isMyApp() {
  function clearTimers() {
    clearInterval(heartbeat);
    clearTimeout(timer);
  }

  function intervalHeartbeat() {
    if (document.webkitHidden || document.hidden) {
      clearTimers();
      console.log('앱이 설치 되어 있습니다.');
    }
  }
  heartbeat = setInterval(intervalHeartbeat, 200);
  const deLay = 1000;
  timer = setTimeout(function () {
    console.log('앱이 없습니다.');
  }, deLay);
}

const CheckInstall: React.FC = () => {
  const [appState, setAppState] = useState();

  location.href = appScheme;

  const userAgent = navigator.userAgent;

  const visitedAt = new Date().getTime(); // 방문 시간

  if (userAgent.match(/iPhone|iPad|iPod/)) {
    setTimeout(function () {
      if (new Date().getTime() - visitedAt < 2000) {
        location.href = '{마켓 주소}';
      }
    }, 500);

    setTimeout(function () {
      location.href = '{커스텀 스킴 주소}';
    }, 0);
  }

  if (userAgent.match(/android/)) {
    if (userAgent.match(/Chrome/)) {
      // 안드로이드의 크롬에서는 intent만 동작하기 때문에 intent로 호출해야함

      setTimeout(function () {
        location.href =
          'intent://커스텀스킴주소#Intent; scheme=스킴; action=..;category=..; package=com.android.xxx; end;';
      }, 1000);
    } else {
      // 크롬 이외의 브라우저들

      setTimeout(function () {
        if (new Date().getTime() - visitedAt < 2000) {
          location.href = '{마켓 주소}';
        }
      }, 500);

      const iframe = document.createElement('iframe');

      iframe.style.visibility = 'hidden';

      iframe.src = '{커스텀 스킴 주소}';

      document.body.appendChild(iframe);

      document.body.removeChild(iframe); // back 호출시 캐싱될 수 있으므로 제거
    }
  }

  return <div>{appState}</div>;
};

export default CheckInstall;
