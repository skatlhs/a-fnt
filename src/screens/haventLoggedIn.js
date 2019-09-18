            <View style={styles.spacer}></View>
            <View style={styles.centerWrapper}>
              <Text style={styles.slogan}>Haven't signed up Yet?</Text>
            </View>
            <RoundedButton
              style={styles.createAccountButton}
              text="Create a New Account!"
              textColor={colors.peach}
              background={colors.white}
              fontSize={20}
              icon={
                <Icon name="user-circle" size={20} style={styles.buttonIcon} />
              }
              handleOnPress={this.onCreatePress}
            />