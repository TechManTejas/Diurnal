import { Button, Checkbox, FileInput, Label, Modal, TextInput } from 'flowbite-react'

function RegisterSection({ show, onClick, onClose }) {
    return(
        <>
            <Modal
                show={show}
                onClose={onClose}
            >
                <Modal.Header>
                    Vendor Register 
                </Modal.Header>
                <Modal.Body>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="small"
                                    value="Name"
                                />
                            </div>
                            <TextInput
                                id="small"
                                type="text"
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email2"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email2"
                                type="email"
                                placeholder="name@flowbite.com"
                                required={true}
                                shadow={true}
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="small"
                                    value="Contact Number"
                                />
                            </div>
                            <TextInput
                                id="small"
                                type="tel"
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="small"
                                    value="Adhaar Number"
                                />
                            </div>
                            <TextInput
                                id="small"
                                type="tel"
                            />
                        </div>

                        <div id="fileUpload">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="file"
                                    value="ID Proof"
                                />
                            </div>
                            <FileInput
                                id="file"
                                helperText="A profile picture is useful to confirm your are logged into your account"
                            />
                        </div>
                        
                        <div id="fileUpload">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="file"
                                    value="Upload Your Picture"
                                />
                            </div>
                            <FileInput
                                id="file"
                                helperText="A profile picture is useful to confirm your are logged into your account"
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password2"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password2"
                                type="password"
                                required={true}
                                shadow={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="repeat-password"
                                    value="Repeat password"
                                />
                            </div>
                            <TextInput
                                id="repeat-password"
                                type="password"
                                required={true}
                                shadow={true}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="agree" />
                            <Label htmlFor="agree">
                                I agree with the{' '}
                                <a
                                    href="/termsandconditions"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    terms and conditions
                                </a>
                            </Label>
                        </div>
                        <Button type="submit">
                            Register new account
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default RegisterSection;