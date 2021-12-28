export const host =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000/"
    : "https://api.ruthikegah.com/"

export const HomeWorkDataURL = `${host}api/home-work/`
export const WorkDataURL = `${host}api/work/`
export const WorkDetailURL = (slug: any) => `${host}api/work/${slug}/`
export const ContactURL = `${host}api/contact/`
