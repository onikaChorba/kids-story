import { CustomMap } from "../components";
import { icons } from "../icons";
import { About, OurTeam, Question } from "../section"

const OurTeamPage = () => {
  return (
    <div>
      <OurTeam />
      <About />
      <Question
        title="Have questions? Get a free consultation."
        description="Leave your phone number and we'll call you back with all the details about the branch"
        background={icons.questionBg}
        inputBg="#f0f0f0"
        buttonText="Send Request"
        radioLabel="I agree with privacy policy"
      />
      <CustomMap />
    </div>
  )
}

export default OurTeamPage;