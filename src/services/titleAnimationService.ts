export const handleScroll = (title: any) => {
  if (title.current) {
    const rect = title.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportHeight && rect.bottom >= 0) {
      title.current.classList.add("animate-slide-in");
    } else if (rect.bottom < 0) {
      title.current.classList.remove("animate-slide-in");
    } else {
      title.current.classList.remove("animate-slide-in");
    }
  }
};
