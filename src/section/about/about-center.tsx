import './index.css'
interface AboutCenterProps {
  list: string[];
  title: string;
  description: string;
  highlightText: string;
}

const AboutCenter = ({
  list,
  title,
  description,
  highlightText,
}: AboutCenterProps) => {
  return (
    <section className="about-center">
      <h2>{title}</h2>
      <p>{description}</p>
      <h3 className="primary-orange-color">{highlightText}</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
export { AboutCenter }
