import { Grid } from "semantic-ui-react";
import EvenDetailedHeader from "./EvenDetailedHeader";
import EvenDetailedInfo from "./EvenDetailedInfo";
import EvenDetailedChat from "./EvenDetailedChat";
import EvenDetailedSidebar from "./EvenDetailedSidebar";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/store/store";
import { useEffect } from "react";

import { actions } from "../events/eventSlice";
import LoadingComponent from "../../app/layout/nav/LoadingComponent";
import { useFireStore } from "../../app/hooks/firestore/useFirestore";

export default function EventDetailedPage() {
  const { id } = useParams();
  const event = useAppSelector(state => state.events.data.find(e => e.id === id));
  const { status } = useAppSelector(state => state.events);
  const { loadDocument } = useFireStore('events');

  useEffect(() => {
    if (!id) return;
    loadDocument(id, actions)
  }, [id, loadDocument])

  if (status === 'loading') return <LoadingComponent />

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
