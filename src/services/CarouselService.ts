export const getActiveIndex = () => {
  const active = document.querySelector("[data-active]");
  return active ? getSlideIndex(active as any) : -1;
};

export const getSlideIndex = ($slide: any) => {
  const slides = Array.from(document.querySelectorAll(".carousel__item"));
  return slides.indexOf($slide);
};

export const prevSlide = (list: any) => {
  const index = getActiveIndex();
  const slides = document.querySelectorAll(".carousel__item");
  const last = slides[slides.length - 1] as any;
  if (last && list) {
    last.remove();
    list.prepend(last);
    activateSlide(slides[index]);
  }
};

export const nextSlide = (list: any) => {
  const index = getActiveIndex();
  const slides = document.querySelectorAll(".carousel__item");
  const first = slides[0] as any;

  if (first && list) {
    first.remove();
    list.append(first);
    activateSlide(slides[index]);
  }
};

export const activateSlide = (slide: any) => {
  if (!slide) return;
  const slides = document.querySelectorAll(".carousel__item");
  slides.forEach((el) => el.removeAttribute("data-active"));

  slide.setAttribute("data-active", "true");
  (slide as any).focus();
};
