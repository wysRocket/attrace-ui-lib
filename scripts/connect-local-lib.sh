#!/bin/bash

echo "Connecting local attrace-ui-lib 🚀 =\c"

THIRD_PARTY_LINKS=(
  react
  
  @emotion/react
  @emotion/styled
  @emotion/css  
  @mui/material
)

for i in "${THIRD_PARTY_LINKS[@]}"
do
  echo "=\c"
  {
    cd ./node_modules/$i && (yarn unlink || true) && yarn link && cd -
  } &> /dev/null
done

{
  cd ../attrace-ui-lib
  yarn unlink || true
  yarn link
} &> /dev/null

for i in "${THIRD_PARTY_LINKS[@]}"
do
  echo "=\c"
  {
    yarn unlink $i || true
    yarn link $i
  } &> /dev/null
done

{
  cd -
  yarn unlink @wysrocket/attrace-ui-lib || true
  yarn link @wysrocket/attrace-ui-lib
} &> /dev/null

echo "> 🤯 Completed ✅ "
