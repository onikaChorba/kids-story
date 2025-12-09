import './index.css'
interface AboutCenterProps {
  title: string;
  description: string;
  highlightText: string;
  list: string[];
}

export const AboutCenter = ({
  title,
  description,
  highlightText,
  list
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
