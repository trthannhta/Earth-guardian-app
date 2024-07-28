import { StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Text } from '@gluestack-ui/themed'

type Props = {}

const PuzzleScreen = (props: Props) => {
  const [show, setShow] = useState(false)


  const handleHint = () => {
    setShow(true)
  }
  return (
    <Box>

    </Box>
  )
}

export default PuzzleScreen

const styles = StyleSheet.create({})