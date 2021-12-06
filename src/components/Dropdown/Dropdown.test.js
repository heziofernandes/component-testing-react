import {render,screen,userEvent} from '../../setupTests';
import {Dropdown} from './Dropdown';

const title = 'Choice your OS';
const options =['MacOS', 'Ubuntu', 'Windows'];

describe('Dropdown Component', () => {
    test('Shoud start closed, without show up itens', () => {
      render(
        <Dropdown
            title={title} 
            options={options}
            onSelect ={()=>{}}
        />,
    );
      const optionMac = screen.queryByText(options[0]);
      const optionUbuntu = screen.queryByText(options[1]);
      const optionWin = screen.queryByText(options[2]);
      
      expect(optionMac).not.toBeInTheDocument();
      expect(optionWin).not.toBeInTheDocument();
      expect(optionUbuntu).not.toBeInTheDocument();
    });

    test('Shoud show options when open', () => {
        render(
          <Dropdown
              title={title} 
              options={options}
              onSelect ={()=>{}}
          />,
      );
    
    const dropdownButton =  screen.getByRole('button',{name:title});
    userEvent.click(dropdownButton);

    const optionMac = screen.getByRole('menuitem',{name:options[0]});
    const optionUbuntu = screen.getByRole('menuitem',{name:options[1]});
    const optionWin = screen.getByRole('menuitem',{name:options[2]});
    
    expect(optionMac).toBeInTheDocument();
    expect(optionWin).toBeInTheDocument();
    expect(optionUbuntu).toBeInTheDocument();
    });

    test('Shoud select an option and close the Dropdown', () => {
        const onSelect= jest.fn();
        render(
          <Dropdown
              title={title} 
              options={options}
              onSelect ={onSelect}
          />,
      );
    
    const dropdownButton =  screen.getByRole('button',{name:title});
    userEvent.click(dropdownButton);

    const optionUbuntu = screen.getByRole('menuitem',{name:options[1]});
    
    expect(optionUbuntu).toBeInTheDocument();

    userEvent.click(optionUbuntu);
    expect(onSelect).toHaveBeenCalledWith(options[1]);
    });
});