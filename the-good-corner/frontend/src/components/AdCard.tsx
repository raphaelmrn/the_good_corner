type Props = {
  name: string;
  url: string;
  image: string;
  price: number;
};
export default function AdCard(props: Props) {
  return (
    <div className="ad-card-container">
      <a className="ad-card-link" href={props.url}>
        <img className="ad-card-image" src={props.image} alt={props.name} />
        <div className="ad-card-text">
          <div className="ad-card-title">{props.name}</div>
          <div className="ad-card-price">{props.price} €</div>
        </div>
      </a>
    </div>
  );
}
