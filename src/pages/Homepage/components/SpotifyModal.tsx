import Typography from "@components/Typography";
import { Back, Heart, Next, Pause, Spotify, Volume } from "@icons/index";
import { theme } from "@styles/theme";
import styled, { keyframes } from "styled-components";
import provemewrong from "@assets/images/provethemwrongimg.png";
import iammorethanthis from "@assets/images/iammorethanthis.png";
import success from "@assets/images/success.png";

const growShrinkAnimation = keyframes`
  0% {
    transform: scaleY(0.1);
  }
  33% {
    transform: scaleY(0.6);
  }
  66% {
    transform: scaleY(0.9);
  }
  100% {
    transform: scaleY(0.1);
  }
`;

const GreenLine = styled.div`
  background-color: #1db954;
  height: 20px;
  width: 2px;
  position: relative;
  transform-origin: bottom;
`;

const Line = styled(GreenLine)`
  &.line-1 {
    animation: ${growShrinkAnimation} infinite 1s ease-in-out;
    animation-delay: 0.2s;
  }
  &.line-2 {
    animation: ${growShrinkAnimation} infinite 1s ease-in-out;
    animation-delay: 0.5s;
  }
  &.line-3 {
    animation: ${growShrinkAnimation} infinite 1s ease-in-out;
    animation-delay: 0.6s;
  }
  &.line-4 {
    animation: ${growShrinkAnimation} infinite 1s ease-in-out;
    animation-delay: 0s;
  }
  &.line-5 {
    animation: ${growShrinkAnimation} infinite 1s ease-in-out;
    animation-delay: 0.4s;
  }
`;

type AlbumCoverType = {
  url: string;
};

const AlbumCover = styled("div").withConfig({
  //Handle the warning where DOM catch url is an invalid props.
  shouldForwardProp: (prop) => prop !== "url",
})<AlbumCoverType>`
  height: 40px;
  width: 40px;
  background-color: #e9e8e8;
  border-radius: 8px;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
`;

const Album = ({ url }: AlbumCoverType) => {
  return <AlbumCover url={url} />;
};

const StyledSpotifyModal = styled.div`
  background: #191414;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  box-shadow: 0 10px 40px -25px rgba(100, 100, 100, 0.5);
  gap: 0.5rem;
`;

const Playlist = styled.div`
  padding: 0 16px;
  flex: 1;
`;

const PlaylistZone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 16px;
`;

const SongItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const VerticalLine = styled.div`
  width: 1px;
  background-color: #fff; /* Adjust the color of the line */
`;

const CurrentSongPlaying = styled.div`
  min-width: 300px;
  min-height: 120px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 16px;
  flex: 1;
`;

const TitleZone = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const Pfp = styled.div`
  height: 40px;
  width: 40px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Playing = styled.div`
  display: flex;
  gap: 1px;
  width: 30px;
  height: 20px;
  justify-content: center;
`;

const SongText = styled.p`
  color: white;
  font-size: 1.25rem;
  font-weight: 900;
  line-height: 1px;
`;

const ArtistText = styled.p`
  color: white;
  font-size: 0.75rem;
  opacity: 0.8;
`;

const TimeText = styled.p`
  color: white;
  font-size: 0.8rem;
  opacity: 0.8;
  background-color: #00000060;
  background-blend-mode: multiply;
`;

const PlayingZone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlayingBar = styled.div`
  background-color: #5e5e5e;
  height: 0.35rem;
  border-radius: 3px;
  width: 80%;
`;

const GreenPlayingBar = styled.div`
  width: 42%;
  background-color: #1db954;
  height: 100%;
  border-radius: 3px;
`;

const SpotifyModal = () => {
  return (
    <StyledSpotifyModal>
      <Playlist>
        <TitleZone>
          <Spotify width={40} />
          <SongText>Motivational Speech</SongText>
        </TitleZone>
        <PlaylistZone>
          <SongItem>
            <Typography color={theme.colors.green} type="default">
              1
            </Typography>
            <Album url={success} />
            <Typography color={theme.colors.green} type="default">
              The path to success!
            </Typography>
          </SongItem>
          <SongItem>
            <Typography color={theme.colors.white} type="default">
              2
            </Typography>
            <Album url={iammorethanthis} />
            <Typography color={theme.colors.white} type="default">
              I am more than this
            </Typography>
          </SongItem>
          <SongItem>
            <Typography color={theme.colors.white} type="default">
              3
            </Typography>
            <Album url={provemewrong} />

            <Typography color={theme.colors.white} type="default">
              Prove them wrong
            </Typography>
          </SongItem>
        </PlaylistZone>
      </Playlist>
      <VerticalLine />
      <CurrentSongPlaying>
        <TitleZone>
          <Pfp>
            <Playing>
              <Line className="line-1" />
              <Line className="line-2" />
              <Line className="line-3" />
              <Line className="line-4" />
              <Line className="line-5" />
            </Playing>
          </Pfp>
          <div>
            <SongText>The path to success!</SongText>
            <ArtistText>The motivation</ArtistText>
          </div>
        </TitleZone>
        <PlayingZone>
          <Volume color="white" />
          <div>
            <Back color="white" />
            <Pause color="white" />
            <Next color="white" />
          </div>
          <Heart color="white" />
        </PlayingZone>
        <PlayingZone>
          <TimeText>1:31</TimeText>
          <PlayingBar>
            <GreenPlayingBar />
          </PlayingBar>
          <TimeText>3:46</TimeText>
        </PlayingZone>
      </CurrentSongPlaying>
    </StyledSpotifyModal>
  );
};

export default SpotifyModal;
