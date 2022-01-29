import {Stack, Button} from 'react-bootstrap';

function AddButtons(){
  return (
    <div>
      <Stack gap={3}>
        <Button>Add To Breakfast</Button>
        <Button>Add To Lunch</Button>
        <Button>Add To Dinner</Button>
      </Stack>

    </div>
  );
}
export default AddButtons