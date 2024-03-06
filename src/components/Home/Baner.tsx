interface Image {
  Img: string,
  className?: string
}

const Baner = ({ Img, className }: Image) => {
  return <img src={ Img } className={ className }/>
}

export default Baner