import { Grid } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { useAppSelector } from "../../app/store/store";
import { useParams } from "react-router";
import { actions } from "./profileSlice";
import { useEffect } from "react";
import { useFireStore } from "../../app/hooks/firestore/useFirestore";
import LoadingComponent from "../../app/layout/nav/LoadingComponent";

export default function ProfilePage() {
  const { id } = useParams();
  const { status, data } = useAppSelector(state => state.profiles);
  const profile = data.find(x => x.id === id);
  const { loadDocument } = useFireStore('profiles');

  useEffect(() => {
    if (id) loadDocument(id, actions)

  }, [id, loadDocument]);

  if (status === 'loading')
    return <LoadingComponent content="loading profile ..." />

  if (!profile) return <h2> Not found</h2>


  return (
    <Grid>
      <Grid.Column width={16} >
        <ProfileHeader profile={profile} />
        <ProfileContent profile={profile}/>
      </Grid.Column>
    </Grid>

  )
}