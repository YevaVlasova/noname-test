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

export const handleFade = (title: any) => {
  if (title.current) {
    const rect = title.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportHeight) {
      title.current.classList.add("animate_fade_in");
    } else {
      title.current.classList.remove("animate_fade_in");
    }
  }
};

export const handleSlideSmallRightCase = (title: any) => {
  if (title.current) {
    const rect = title.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportHeight) {
      title.current.classList.add("animate_right_slide_in");
    } else {
      title.current.classList.remove("animate_right_slide_in");
    }
  }
};
export const handleSlideSmallLeftCase = (title: any) => {
  if (title.current) {
    const rect = title.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportHeight) {
      title.current.classList.add("animate_left_slide_in");
    } else {
      title.current.classList.remove("animate_left_slide_in");
    }
  }
};
