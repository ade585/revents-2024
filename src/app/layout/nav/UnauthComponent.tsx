import { Segment, Grid, Divider, Header, Icon, Button } from "semantic-ui-react";
import { openModal } from "../../common/modal/modalSlice";
import { useAppDispatch } from "../../store/store";
import { useLocation, useNavigate } from "react-router-dom";

export default function UnauthComponent() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/events'

    return (
        <Segment placeholder>
            <Grid columns={2} stackable textAlign="center" >
                <Divider vertical>Or</Divider>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column textAlign="center">
                        <Header icon>
                            <Icon name='lock' />
                            You need to be signed to do that
                        </Header>

                        <br />
                        <Button.Group>
                            <Button
                                color="teal"
                                content='Login'
                                onClick={() => dispatch(openModal({ type: 'LoginForm', data: { from } }))}
                            />
                            <Button.Or />
                            <Button
                                color="green"
                                content='Register'
                                onClick={() => dispatch(openModal({ type: 'RegisterForm', data: { from } }))}
                            />
                        </Button.Group>
                    </Grid.Column>
                    <Grid.Column >
                        <Header icon>
                            <Icon name="angle left" />
                            <Button
                                style={{ marginTop: 10 }}
                                content="Cancel"
                                onClick={() => navigate(-1)}
                            />
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment >
    )
}