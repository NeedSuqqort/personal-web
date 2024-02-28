import { Box, Spacer, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import Intro from "./Intro";
import { mainPageIntro } from "./constants";
import Section from "./Section";
import About from "./About";

function MainPage() {
  // const [stat, setStat] = useState("online");
  // const [noti, setNoti] = useState(-1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainPageMessage: string[] = "Welcome".split("");

  // const handleNoti = () => {
  //   Notification.requestPermission().then((res) => {
  //     console.log(res);
  //     if(res === "default")
  //       return;
  //     if(res === "granted"){
  //       alert("Notification access is granted.")
  //       setNoti(1)
  //     }
  //     else{
  //       alert("Failed to access notifications.")
  //       setNoti(0)
  //     }
  //     document.querySelector('.notiperm')?.setAttribute("hidden","true");
  //   })
  // }

  return (
    <Box px={20} minH={"100vh"}>
      <Flex
        justifyContent="center"
        alignContent="center"
        justifyItems="center"
        alignItems="center"
        alignSelf="center"
        className="waviy pt-20"
      >
        {mainPageMessage.map((char, index) => (
          <span
            className={`--i:${index}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </Flex>
      {/* <Stack direction={'row'} spacing={4} my={4} justifyContent={'center'} alignItems={'center'}>
        <Button className="online-stat" onClick={() => setStat(stat === "online" ? "offline" : "online")}>
          NeedSupport is currently {stat}.
        </Button>
        <Button className="notiperm" onClick={handleNoti}>
          Turn on notifications for the website
        </Button>
        <Link to={"404"}><Button>Portal to Not Found Page</Button></Link>
      </Stack>
      {noti !== -1 && 
        <Text align="center" className='text-xl text-bold text-blue-900'>
          Notification is current {noti ? "enabled." : "disabled."}
        </Text>
      } */}
      <Spacer my={35} />
      <Intro
        words={mainPageIntro}
        id="text"
        colors={["#C97C5D", "#B36A5E", "#EF7A85", "#DC758F"]}
      />
      <Section>
        <About />
      </Section>
      {/* <Box px={20} textAlign={"center"}>
        <Link to={"about"}>
          <Button
            my={10}
            size="lg"
            variant="outline"
            borderColor="black"
            rightIcon={<ArrowForwardIcon alignSelf="center" boxSize={5} />}
          >
            Learn more about me
          </Button>
        </Link>
      </Box> */}
    </Box>
  );
}

export default MainPage;
