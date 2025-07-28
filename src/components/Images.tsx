interface propsInterface {
  src: string;
}
export default function Images({ src }: propsInterface) {
  return <img src={src} alt="" className="h-full w-full object-cover" />;
}
