import React from 'react'
import {  View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants'
import {CircleButton, RectangleButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid} from '../components'

const DetailsHeader =({data, navigation})=>{
    return(
    <View style={{width: '100%', height: 373}}>
        <Image 
            source={data.image}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
        />
        <CircleButton 
            imgUrl={assets.left}
            handlePress={()=> navigation.goBack()}
            top={StatusBar.currentHeight + 10}
            left={15}
        />
        <CircleButton 
            imgUrl={assets.heart}
            top={StatusBar.currentHeight + 10}
            right={15}
        />
    </View>
    )
}

const Details = ({route, navigation})=> {
    // console.log({route})
    // console.log({navigation})
    const {data} = route.params;
    console.log("data of route.params----> ",data)
    return (
        <SafeAreaView style={{flex: 1}}>
            <FocusedStatusBar 
                barStyle="dark-content"
                backgroundColor= "transparent"
                translucent={true}
            />
            <View style={{
                width:'100%',
                position: 'absolute',
                bottom: 0,
                paddingVertical: SIZES.font,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                zIndex: 1
            }}>
                <RectangleButton 
                    minWidth={170} 
                    fontSize={SIZES.large} 
                    {...SHADOWS.dark} 
                />
            </View>
            <FlatList 
                data={data.bids}
                renderItem={({item})=> <DetailsBid bid={item} />}
                keyExtractor={(item)=> item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
                ListHeaderComponent={()=>(
                    <React.Fragment>
                        <DetailsHeader data={data} navigation={navigation}/>
                        <SubInfo />
                        <View style={{paddinng: SIZES.font}}>
                            <DetailsDesc data={data}/>

                            {data.bids.length > 0 && (
                                <Text style={{
                                    fontSize: SIZES.font,
                                    fontFamily: FONTS.semiBold,
                                    color: COLORS.primary,
                                    marginLeft: '3%'
                                }}>
                                    Current Bids
                                </Text>
                            )}

                        </View>
                    </React.Fragment>
                )}
            />
        </SafeAreaView>
    )
}

export default Details
