export default function Icon(params) {
  const { size = "small", name } = params;
  return <ion-icon name={name} size={size}></ion-icon>;
}
