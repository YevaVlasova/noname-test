export const handleSlide = (title: any) => {
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

export const handleMainSlide = (title: any) => {
  if (title.current) {
    const rect = title.current.getBoundingClientRect();
    if (rect.top > -500) {
      title.current.classList.add("animate_fade_up_in");
    } else {
      title.current.classList.remove("animate_fade_up_in");
    }
  }
};

export const handleAnimation = (title: any) => {
  if (title.current) {
    const rect = title.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportHeight) {
      title.current.classList.add("animate");
    } else {
      title.current.classList.remove("animate");
    }
  }
};

export const modalEnterAnimation = (title: any, modal: boolean) => {
  console.log(modal);
  if (title.current) {
    if (!modal) {
      title.current.classList.remove("animate_out");
      title.current.classList.add("animate_in");
    } else {
      title.current.classList.remove("animate_in");
      title.current.classList.add("animate_out");
    }
  }
};
