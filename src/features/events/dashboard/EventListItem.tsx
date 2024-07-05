import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../app/types/event";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/store/store";
import { deleteEvent } from "../eventSlice";

type Props = {
    event: AppEvent
}

export default function EventListItem({ event }: any) {
    const dispatch = useAppDispatch();

    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL || './user.png'} />
                        <Item.Content>
                            <Item.Header >{event.title}</Item.Header>
                            <Item.Description> {event.description}</Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {event.date}
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
                    onClick={() => dispatch(deleteEvent(event.id))}
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