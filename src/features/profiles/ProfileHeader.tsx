import { Button, Divider, Grid, Header, Item, ItemGroup, Reveal, Segment, Statistic } from "semantic-ui-react";
import { Profile } from "../../app/types/profile";

type Props = {
    profile: Profile
}


export default function ProfileHeader({profile}: Props) {
    return (
        <Segment>
            <Grid>
                <Grid.Column width={12} >
                    <ItemGroup>
                        <Item>
                            <Item.Image avatar size="small" src={profile.photoURL || '/user.png'} />
                            <Item.Content verticalAlign="middle">
                                <Header as='h1' 
                                content={profile.displayName}
                                style={{ display: 'block', marginBottom: 10 }} />
                            </Item.Content>
                        </Item>
                    </ItemGroup>
                </Grid.Column>
                <Grid.Column width={4} >
                    <Statistic.Group>
                        <Statistic label='Followers' value={10} />
                        <Statistic label='Following' value={5} />
                    </Statistic.Group>
                    <Divider />
                    <Reveal animated="move">
                        <Reveal.Content visible style={{ width: '100%' }}>
                            <Button fluid color="teal" content='Following' />
                        </Reveal.Content>
                        <Reveal.Content hidden style={{ width: '100%' }}>
                            <Button fluid color="red" content='Unfollowing' />
                        </Reveal.Content>
                    </Reveal>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}