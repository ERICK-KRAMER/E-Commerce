interface Img {
  Img: string,
  className?: string
}

const Image = ({ Img, className }: Img ) => {
  return <img src={ Img } className={ className }/>
}

export default Image;