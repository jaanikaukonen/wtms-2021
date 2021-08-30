import React from "react";
import { StyleSheet, SafeAreaView, Text, Image } from "react-native";
import PropTypes from "prop-types";
import { uploadsUrl } from "../utils/variables";
import { format } from "date-fns";

const Single = ({ route }) => {
  const {params} = route;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{width: 200, height: 200}}
        source={{uri: uploadsUrl + params.filename}}
      />
      <Text>{params.title}</Text>
      <Text>{params.description}</Text>
      <Text>{format(new Date(params.time_added), 'EEEE dd MMMM yyyy')}</Text>
    </SafeAreaView>
  );
};

Single.propTypes = {
  route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  }
});

export default Single;
