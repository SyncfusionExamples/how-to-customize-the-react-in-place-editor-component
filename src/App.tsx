import { InPlaceEditorComponent, } from '@syncfusion/ej2-react-inplace-editor';
import { PopupSettingsModel } from '@syncfusion/ej2-inplace-editor/src/inplace-editor/base/models-model';
import './App.css';

let textModel: object = {placeholder: 'Enter your name'}  ;
let saveButton: object = { content: 'Save', cssClass: 'e-outline' };
let cancelButton: object = { content: 'Cancel', cssClass: 'e-outline' };
let popupSettings:PopupSettingsModel = { model:{position:'BottomRight'} };

function App() {
  return (
    <div className="App">
    <table>
      <tr>
          <td><b>Enter your name:</b></td>
          <td>
              <InPlaceEditorComponent type='Text' model={textModel}
              value='Andrew'
              saveButton={saveButton} cancelButton={cancelButton} popupSettings={popupSettings}
              editableOn='EditIconClick' showButtons={false} 
              disabled={true}
              /> 
          </td>
      </tr>
      </table>
      
    </div>
  );
}

export default App;
