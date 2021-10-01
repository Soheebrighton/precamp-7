// let mySwitch = false

const getToken = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector("span").innerText = token;
  //   document.querySelector("span").style.color = `#${token}`;

  let time = 10;

  setInterval(
    (getToken) => {
      // if(mySwitch === false)
      if (time >= 0) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const secondsWithZero = String(seconds).padStart(2, "0");

        time = time - 1;

        document.getElementById("timer").innerText =
          minutes + ":" + secondsWithZero;

        if (time === 0) {
          document.getElementById("verify").setAttribute("disabled", "true");
        }
      }
    },

    1000
  );
};

// switch 변수 이용 on / Off
