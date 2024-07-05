import { Grid} from "semantic-ui-react";
import EvenDetailedHeader from "./EvenDetailedHeader";
import EvenDetailedInfo from "./EvenDetailedInfo";
import EvenDetailedChat from "./EvenDetailedChat";
import EvenDetailedSidebar from "./EvenDetailedSidebar";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/store/store";

export default function EventDetailedPage() {
  const {id} = useParams();
  const event = useAppSelector(state => state.events.events.find(e=>e.id === id));
  if (!event) return <h2>Event not find </h2>
  return (
    <Grid>
      <Grid.Column width={10}>
      <EvenDetailedHeader event={event} />
      <EvenDetailedInfo event={event} />
      <EvenDetailedChat />
      </Grid.Column>
      <Grid.Column width={6} >
        <EvenDetailedSidebar />
      </Grid.Column>
    </Grid>
  )
}