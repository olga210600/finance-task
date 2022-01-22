import TickerBlock from "./index";
import renderer from 'react-test-renderer'

it('renders', () => {
    const tree = renderer.create(<TickerBlock/>).toJSON();
    expect(tree).toMatchSnapshot()
})

