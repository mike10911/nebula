import { Box, Image, Heading, Text } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";


const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  

  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2}>
        {post.postType === "Article" && (
          <>
            <Heading as="h1" size="xl" noOfLines={1}>
              {post.headLine}
            </Heading>
            <Box>
              <Text>{post.contentText}</Text>
            </Box>
          </>
        )}
      </Box>
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} alt={"FEED POST IMG"} />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  );
};

export default FeedPost;
