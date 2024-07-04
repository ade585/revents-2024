import { Grid} from "semantic-ui-react";
import EvenDetailedHeader from "./EvenDetailedHeader";
import EvenDetailedInfo from "./EvenDetailedInfo";
import EvenDetailedChat from "./EvenDetailedChat";
import EvenDetailedSidebar from "./EvenDetailedSidebar";

export default function EventDetailedPage() {
  return (
    <Grid>
      <Grid.Column width={10}>
      <EvenDetailedHeader />
      <EvenDetailedInfo />
      <EvenDetailedChat />
      </Grid.Column>
      <Grid.Column width={6} >
        <EvenDetailedSidebar />
      </Grid.Column>
    </Grid>
  )
}