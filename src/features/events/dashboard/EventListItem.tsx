import { Button, Icon, Item, ItemGroup, Label, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";
import { useFireStore } from "../../../app/hooks/firestore/useFirestore";
import { format } from "date-fns";


export default function EventListItem({ event }: any) {
    const { remove } = useFireStore('events');


    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL || './user.png'} />
                        <Item.Content>
                        <Item.Header >{event.title}</Item.Header>
                    
                        <Item.Description >Hosted by <strong>{event.hostedBy}</strong></Item.Description>
                          
                            {event.isCancelled &&
                                <Label
                                    style={{ top: '-40px' }}
                                    ribbon='right'
                                    color="red"
                                    content='This event has been cancelled'
                                />}
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {format(new Date(event.date), 'dd MMM yyyy, h:mm a')}
                    <Icon name='marker' /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map((attendee: any) => (
                        <EventListAttendee key={attendee.id} attendee={attendee} />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <span> {event.description}</span>
                <Button
                    color="red"
                    floated="right"
                    content="Delete"
                    onClick={() => remove(event.id)}
                />
                <Button
                    as={Link}
                    to={`/events/${event.id}`}
                    color="teal"
                    floated="right"
                    content="View"

                />
            </Segment>
        </SegmentGroup>
    )
}