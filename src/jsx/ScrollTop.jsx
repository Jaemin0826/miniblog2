import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 전환 시 스크롤 맨 위로
  }, [pathname]);

  return null;
}

export default ScrollTop;
