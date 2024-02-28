export default function Card({ cardData }) {
  const { description, url } = cardData;

  return (
    <div className="container">
      <div>
        <img src={url} alt={description} className="img-animal" />
      </div>

      <div className="title-container">
        <p>{description}</p>
      </div>
    </div>
  );
}
