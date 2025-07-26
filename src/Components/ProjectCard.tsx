import { Badge, Button, Card, Group, Indicator, Text, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import FullProjectModal from "./FullProjectModal";
import PublicImage from "./PublicImage";

const ProjectCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const badge = useMatches({
        xsm: "sm", 
        md: "md", 
        lg: "lg"
    });
    const btn = useMatches({
        xs: "xs", 
        sm: "sm", 
        md: "md"
    });

    return (
        <div className="h-full">
            <Card 
                className="!bg-bgColor h-full flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:!scale-[1.02] hover:!shadow-[0_0_20px_5px_#64FFDA30] !border-primaryColor border-2 group overflow-hidden"  
                shadow="lg" 
                padding="lg" 
                radius="xl" 
                withBorder
            >
                {/* Image Section */}
                <Card.Section className="p-4 pb-2">
                    <div className="relative overflow-hidden rounded-xl">
                        <PublicImage
                            className="!rounded-xl !shadow-[0_0_10px_0_#64FFDA50] transition-transform duration-500 group-hover:scale-110"
                            src={props.image}
                            alt={props.title}
                        />
                        {/* Overlay with quick actions */}
                        <div className="absolute inset-0 bg-bgColor/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 rounded-xl">
                            {props.live && (
                                <a
                                    href={props.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-primaryColor text-bgColor rounded-full hover:scale-110 transition-transform duration-300"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <IconExternalLink size={20} />
                                </a>
                            )}
                            {props.github && (
                                <a
                                    href={props.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-primaryColor text-bgColor rounded-full hover:scale-110 transition-transform duration-300"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <IconBrandGithub size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                </Card.Section>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-2">
                    {/* Title and Live Badge */}
                    <Group justify="space-between" mt="md" mb="sm" align="flex-start">
                        <div className="!text-2xl sm-mx:!text-xl xs-mx:!text-lg !font-bold !text-white flex items-center gap-3 flex-wrap">
                            <span className="leading-tight">{props.title}</span>
                            {props.live && (
                                <Badge 
                                    className="!px-2 animate-pulse" 
                                    variant="outline" 
                                    color="red" 
                                    rightSection={
                                        <Indicator 
                                            className="!mr-0.5 !z-0" 
                                            color="red" 
                                            position="middle-end" 
                                            size={7} 
                                            processing
                                        />
                                    }
                                >
                                    Live
                                </Badge>
                            )}
                        </div>
                    </Group>

                    {/* Technologies */}
                    <Group mb="md" className="!gap-2">
                        {props.technologies.map((tech: string, index: number) => 
                            index < 4 && (
                                <Badge 
                                    key={index} 
                                    size={badge} 
                                    variant="light" 
                                    color="#64FFDA"
                                    className="hover:bg-primaryColor/20 transition-colors duration-300"
                                >
                                    {tech}
                                </Badge>
                            )
                        )}
                        {props.technologies.length > 4 && (
                            <Badge 
                                size={badge} 
                                variant="outline" 
                                color="#64FFDA"
                            >
                                +{props.technologies.length - 4}
                            </Badge>
                        )}
                    </Group>

                    {/* Description */}
                    <Text 
                        className="!text-justify !text-base xs-mx:!text-sm !leading-relaxed flex-grow" 
                        lineClamp={4} 
                        c="dimmed"
                    >
                        {props.desc}
                    </Text>

                    {/* Action Button */}
                    <Button 
                        onClick={open}
                        className="mt-4 hover:scale-105 transition-transform duration-300 focus-visible:!outline-none" 
                        color="#64FFDA" 
                        variant="outline" 
                        radius="lg"
                        size={btn}
                        fullWidth
                    >
                        Learn More
                    </Button>
                </div>
            </Card>
            
            <FullProjectModal 
                opened={opened} 
                close={close} 
                title={props.title} 
                desc={props.desc} 
                image={props.image} 
                live={props.live} 
                link={props.link} 
                github={props.github} 
                technologies={props.technologies} 
            />
        </div>
    );
};

export default ProjectCard;