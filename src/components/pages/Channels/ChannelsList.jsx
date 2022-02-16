import { TickerChannel } from '../TickerChannel/TickerChannel'
import { TradeChannel } from '../TradeChannel/TradeChannel'
import * as Styled from '../Channels/channelsList.styles'

const ChannelsList = ({}) => {
  return (
    <Styled.SectionRight>
      <Styled.ChannelsListWrap>
        <TickerChannel />
        <TradeChannel />
      </Styled.ChannelsListWrap>
    </Styled.SectionRight>
  )
}
export default ChannelsList
