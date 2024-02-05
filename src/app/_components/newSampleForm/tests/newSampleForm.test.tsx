import NewSampleForm from '../NewSampleForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Providers from 'app/_utils/Providers';
import { companies, patientLocations, visionDefects } from './fixtures';

function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe('NewSampleForm component', () => {
  it('implements proper validation', async () => {
    const { user } = setup(
      <Providers>
        <NewSampleForm
          companies={companies}
          locations={patientLocations}
          visionDefects={visionDefects}
        />
      </Providers>
    );

    await userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(
      await screen.findByText(/firstname is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/lastname is required/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/age is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/city is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/company is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/vision defect is required/i)
    ).toBeInTheDocument();

    await userEvent.type(
      screen.getByRole('textbox', { name: 'firstname' }),
      'John'
    );
    expect(
      screen.queryByText(/firstname is required/i)
    ).not.toBeInTheDocument();

    await userEvent.type(
      screen.getByRole('textbox', { name: 'lastname' }),
      'Doe'
    );
    expect(screen.queryByText(/lastname is required/i)).not.toBeInTheDocument();

    await userEvent.type(
      screen.getByRole('spinbutton', { name: /age/i }),
      '25'
    );
    expect(screen.queryByText(/age is required/i)).not.toBeInTheDocument();

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'cityId' }),
      'Poznań'
    );

    expect(screen.queryByText(/city is required/i)).not.toBeInTheDocument();

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'districtId' }),
      'Poznań - Winogrady'
    );

    expect(screen.queryByText(/district is required/i)).not.toBeInTheDocument();

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'companyId' }),
      'Company A'
    );

    expect(screen.queryByText(/company is required/i)).not.toBeInTheDocument();

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'visionDefectId' }),
      'Astigmatism'
    );

    expect(screen.queryByText(/vision defect is required/i)).not.toBeInTheDocument();
  });

  it('displays modal after the sample is created', async () => {
    const { user } = setup(
      <Providers>
        <NewSampleForm
          companies={companies}
          locations={patientLocations}
          visionDefects={visionDefects}
        />
      </Providers>
    );

    await userEvent.type(
      screen.getByRole('textbox', { name: 'firstname' }),
      'John'
    );
    expect(
      screen.queryByText(/firstname is required/i)
    ).not.toBeInTheDocument();

    await userEvent.type(
      screen.getByRole('textbox', { name: 'lastname' }),
      'Doe'
    );

    await userEvent.type(
      screen.getByRole('spinbutton', { name: /age/i }),
      '25'
    );

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'cityId' }),
      'Poznań'
    );

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'districtId' }),
      'Poznań - Winogrady'
    );

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'companyId' }),
      'Company A'
    );

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'visionDefectId' }),
      'Astigmatism'
    );

    await userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(await screen.findByText('Sample created!')).toBeInTheDocument();
    expect(await screen.findByText('mock sample id')).toBeInTheDocument();
    expect(await screen.findByText(/mock lab name - mock room/)).toBeInTheDocument();
    expect(await screen.findByText(/mock city, mock address/)).toBeInTheDocument();
  });
});
