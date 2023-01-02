import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    // addEventListener
    const listener = (event) => {
      // 안을 클릭했다면 return
      // ref 가 선택되지 않았거나 선택된 ref 밖에 있는 요소가 선택되었을 때 hanlder 작동 x(ref.current 는 무조건 modal 안에만이니까)
      if (!ref.current || ref.current.contains(event.target)) return;

      // 아니면 hanlder 호출
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // removeEventListener
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
